class CocktailsController < ApplicationController
  def index
    @cocktails = Cocktail.all
    @cocktail = Cocktail.new
  end

  def show
    @cocktail = Cocktail.find(params[:id])
    @dose = Dose.new
  end

  def create
    @cocktail = Cocktail.new(cocktail_params)
    @cocktail.save
    redirect_to cocktails_path
  end

  def destroy
    cocktail = Cocktail.find(params[:id])
    cocktail.destroy
    redirect_to cocktails_path

  end

  def search
    if params[:search].empty?
      redirect_to(root_path, alert: "Empty field!") and return
    else
      @parameter = params[:search].downcase
      @results = Cocktail.all.where("lower(name) LIKE :search", search: "%#{@parameter}%")
    end
  end


private

def cocktail_params
 params.require(:cocktail).permit(:name, :photo)
end


end

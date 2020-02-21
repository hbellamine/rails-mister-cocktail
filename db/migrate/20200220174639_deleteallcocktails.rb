class Deleteallcocktails < ActiveRecord::Migration[5.2]
  def change

    Cocktail.destroy_all
  end
end

class Changecocktailpricetype < ActiveRecord::Migration[5.2]
  def change
    change_column :cocktails, :price, :float
  end
end

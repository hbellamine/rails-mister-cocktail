class Addcolumningredients < ActiveRecord::Migration[5.2]
  def change
  add_column :ingredients, :unitprice, :integer
  end
end

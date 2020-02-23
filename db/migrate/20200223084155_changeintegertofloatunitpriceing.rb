class Changeintegertofloatunitpriceing < ActiveRecord::Migration[5.2]
  def change
    change_column :ingredients, :unitprice, :float
  end
end

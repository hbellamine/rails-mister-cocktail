class Addcocktailprice < ActiveRecord::Migration[5.2]
  def change
    add_column :cocktails, :price, :integer
  end
end

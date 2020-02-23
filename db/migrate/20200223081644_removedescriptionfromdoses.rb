class Removedescriptionfromdoses < ActiveRecord::Migration[5.2]
  def change
   remove_column :doses, :description
    add_column :doses, :description, :integer
  end
end

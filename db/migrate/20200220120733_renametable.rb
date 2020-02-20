class Renametable < ActiveRecord::Migration[5.2]
  def change
    rename_table :dose, :doses
  end
end

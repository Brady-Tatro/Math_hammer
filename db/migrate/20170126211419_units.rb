class Units < ActiveRecord::Migration[5.0]
  def change
    create_table :units do |t|
      t.string :army, null: false
      t.string :unitName, null: false
      t.integer :minimumSize, null: false
      t.integer :maximumSize, null: false
      t.integer :ws, null: false
      t.integer :bs, null: false
      t.integer :strength, null: false
      t.integer :toughness, null: false
      t.integer :wounds, null: false
      t.integer :iniative, null: false
      t.integer :attacks, null: false
      t.integer :leadership, null: false
      t.integer :sv, null: false
    end
  end
end

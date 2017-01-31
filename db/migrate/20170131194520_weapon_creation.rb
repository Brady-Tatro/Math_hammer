class WeaponCreation < ActiveRecord::Migration[5.0]
  def change
    create_table :weapons do |t|
      t.string :name, null: false
      t.integer :range, null: false
      t.integer :shots, null: false
      t.integer :weaponStrength, null: false
      t.integer :ap, null: false
      t.string :firstSpecial
      t.string :secondSpecial
      t.string :thirdSpecial
      t.string :fourthSpecial
    end
  end
end

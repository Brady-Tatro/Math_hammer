class Weapon < ApplicationRecord

  validates :name, presence: true
  validates :range, presence: true
  validates :shots, presence: true
  validates :weaponStrength, presence: true
  validates :ap, presence: true

end

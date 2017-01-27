class User < ApplicationRecord::Base

  validates :army, presence: true
  validates :unitName, presence: true
  validates :minimumSize, presence: true
  validates :maximumSize, presence: true
  validates :ws, presence: true
  validates :bs, presence: true
  validates :strength, presence: true
  validates :toughness, presence: true
  validates :wounds, presence: true
  validates :iniative, presence: true
  validates :attacks, presence: true
  validates :leadership, presence: true
  validates :sv, presence: true


end

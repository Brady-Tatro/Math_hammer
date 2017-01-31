class Api::V1::WeaponsController < ApplicationController
  def new
    @weapon = Weapon.new
  end

  def create
    @weapon = Weapon.new(weapon_params)
    binding.pry
    if @weapon.save
      flash[:notice] = "weapon has been added"
    else
      flash[:notice] = @weapon.errors.full_messages.join(',')
    end
  end

  private

  def weapon_params
    params.require(:weapon).permit(:name, :range, :shots, :weaponStrength, :ap, :firstSpecial, :secondSpecial, :thirdSpecial, :fourthSpecial)
  end

end

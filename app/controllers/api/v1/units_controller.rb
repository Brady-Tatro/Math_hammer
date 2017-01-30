class Api::V1::UnitsController < ApplicationController
  def new
    @unit = Unit.new
  end

  def create
    @unit = Unit.new(unit_params)
    binding.pry
    if @unit.save
      flash[:notice] = "Unit has been added"
    else
      binding.pry
      flash[:notice] = @unit.errors.full_messages.join(',')
    end
  end

  def unit_params
    params.require(:unit).permit(:army, :unitName, :minimumSize, :maximumSize, :ws, :bs, :strength, :toughness, :wounds, :iniative, :attacks, :leadership, :sv)
  end

end

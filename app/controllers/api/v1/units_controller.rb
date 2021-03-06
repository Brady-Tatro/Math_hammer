class Api::V1::UnitsController < ApplicationController
  def new
    @unit = Unit.new
  end

  def create
    @unit = Unit.new(unit_params)
    if @unit.save
      flash[:notice] = "Unit has been added"
    else
      flash[:notice] = @unit.errors.full_messages.join(',')
    end
  end
  private

  def unit_params
    params.require(:unit).permit(:army, :unitName, :minimumSize, :maximumSize, :ws, :bs, :strength, :toughness, :wounds, :iniative, :attacks, :leadership, :sv)
  end

end

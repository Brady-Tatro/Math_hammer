Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "application#index"

  resource :unitcreation
  resource :weaponcreation

  namespace :api do
      namespace :v1 do
        resources :units, only: [:new, :create]
        resources :weapons, only: [:new, :create]
      end
    end
end

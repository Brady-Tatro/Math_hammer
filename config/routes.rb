Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "application#index"

  resource :unitcreation
  resource :weaponcreation
  resource :faceoffselection

  namespace :api do
      namespace :v1 do
        resources :units, only: [:index, :new, :create]
        resources :weapons, only: [:index, :new, :create]
      end
    end
end

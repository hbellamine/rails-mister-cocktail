Rails.application.routes.draw do

  get 'orders/index'
  get 'orders/new'
  get 'orders/create'
  get 'orders/destroy'
  get 'orders/update'
  get 'orders/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'cocktails#index'

  resources :cocktails, only: [:index, :show, :create, :new, :destroy] do
    resources :doses, only: [:new, :create]
  end

  resources :doses, only: [:destroy]

  get '/search' => 'cocktails#search', :as => 'search_page'

end

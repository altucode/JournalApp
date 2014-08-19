Rails.application.routes.draw do
  namespace :api, only: [] do
    resources :posts, only: [:create, :index, :show, :update]
  end

  resources :static_pages, only: [:root]

  root to: "static_pages#root"
end

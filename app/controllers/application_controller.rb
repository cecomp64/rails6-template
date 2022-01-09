class ApplicationController < ActionController::Base

  # Allw other fields to be updated when you crate or update a user
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :email, :password, :bio) }
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:name, :email, :password, :current_password, :bio) }
  end

  # Where to go after sign-in, update user
  def user_root_path
    root_path
  end
end

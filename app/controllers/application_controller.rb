class ApplicationController < ActionController::Base
  before_action :authenticate_user!


  inertia_share user: -> { current_user }
  inertia_share flash: -> {
    {
        success: flash.notice,
        error: flash.alert
    }
  }
end

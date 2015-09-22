class Tweet < ActiveRecord::Base
  belongs_to :user

  def index
    render json: Tweet.includes(:user).order(created_at: :desc).all
  end

  def as_json(options={})
    super(methods: [:name])
  end

  def name
    user.display_name
  end
end

class Tweet < ActiveRecord::Base
  belongs_to :user

  def index
    render json: Tweet.includes(:user).order(created_at: :desc).all
  end

  def as_json(options={})
    super(methods: [:name, :gravatar])
  end

  def name
    user.display_name
  end

  def gravatar
    hash = Digest::MD5.hexdigest(user.email)
    "http://www.gravatar.com/avatar/#{hash}"
  end
end

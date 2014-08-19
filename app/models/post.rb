class Post < ActiveRecord::Base
  validates :title, presence: true, length: {minimum: 1, allow_nil: true}

end

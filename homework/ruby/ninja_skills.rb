# 1 

a = true
b = false

puts a && b
puts a || b

# 2

rubyvar = nil
puts rubyvar
rubyvar = "nil was here"
puts rubyvar
puts rubyvar.class

# 3

d = Fixnum 
puts d
e = Float
puts e
d = e
puts d

# 4

christine = "Hi, I'm Christine"
likesTo = "long walks on the beach, kinda"

puts christine + " and I like " + likesTo

g = "2"
gToNumber = 2
puts g + gToNumber.to_s
puts g.to_i + gToNumber

# 5

puts "Enter an integer"
num = gets
puts num.to_i * 2

puts "What do they call you, young samurai?"
name = gets
puts "Whatcha up to in your free time?"
whatTheyUpTo = gets
puts "#{name} does #{whatTheyUpTo}"

# 6

myFirstArray = []
myFirstArray = ["one", "two", "three", "four", "five", 1, 2, 3, 4]
puts myFirstArray.to_s
puts myFirstArray[-1]
puts myFirstArray[0]
puts myFirstArray[1] = "Joe"
puts myFirstArray[2] = 3
myFirstArray << true
puts myFirstArray.to_s
puts myFirstArray[3].class

# 7

myFavoriteAnimals = { 
    "Rookie" => "Dog", 
    "Edgar" => "Donkey", 
    "Sarah" => "Horse", 
    "Sputnik" => "Bear", 
    "Buddy" => "Shark"
}
myFavoriteAnimals['Edgar'] = "Bear"
puts myFavoriteAnimals

favoriteMovie = {}
favoriteMovie["movie"] = "Harambe probably had a favorite movie"
puts "My favorite movie is " + favoriteMovie["movie"]



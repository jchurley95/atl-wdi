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
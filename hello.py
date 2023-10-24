name = input("What is your name: ")

print("Hello", name)

def multiply(a, b):
    return a * b

while True:
    try:
        number = int(input("Enter a valid positive integer: "))
        break
    except Exception:
        print("You entered an invalid number. Try again")


while True:
    try:
        number2 = int(input("Enter a valid positive integer: "))
        break
    except Exception:
        print("You entered an invalid number. Try again")

print(multiply(number, number2))

    
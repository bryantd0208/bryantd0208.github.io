import math as Math
polygons = {
    "1": "Monogon",
    "2": "Bigon",
    "3": "Triangle",
    "4": "Tetragon",
    "5": "Pentagon",
    "6": "Hexagon",
    "7": "Septagon",
    "8": "Octagon",
    "9": "Nonagon",
    "10": "Decagon"
}
sides = -1
min = 1
max = len(polygons)
def validateEntry(entry):
    if 1 <= entry <= 10:
        return True
    else:
        return False


while not validateEntry(sides):
    sides = float(input())
    sides = Math.ceil(sides)

print(polygons[str(sides)])
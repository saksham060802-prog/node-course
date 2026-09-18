  import numpy as np

# --- Root Finding Methods ---

def bisection(f, a, b, iterations):
    for i in range(iterations):
        c = (a + b) / 2
        if f(a) * f(c) < 0:
            b = c
        else:
            a = c
    return (a + b) / 2

def regula_falsi(f, a, b, iterations):
    c = a
    for i in range(iterations):
        c = (a * f(b) - b * f(a)) / (f(b) - f(a))
        if f(a) * f(c) < 0:
            b = c
        else:
            a = c
    return c

def secant(f, x0, x1, iterations):
    for i in range(iterations):
        if f(x1) - f(x0) == 0:
            break
        x2 = x1 - f(x1) * (x1 - x0) / (f(x1) - f(x0))
        x0, x1 = x1, x2
    return x1

def newton_raphson(f, df, x0, iterations):
    x = x0
    for i in range(iterations):
        if df(x) == 0:
            break
        x = x - f(x) / df(x)
    return x

# --- Solving the Questions ---

print("Tutorial - 1 Solutions:\n")

# Q1: x^3 - 2x - 5 = 0 (Bisection & Regula Falsi, 5 iterations)
f1 = lambda x: x**3 - 2*x - 5
# Roots lie between 2 and 3 because f(2) = -1, f(3) = 16
print(f"1) Bisection (5 iters): {bisection(f1, 2, 3, 5):.6f}")
print(f"1) Regula Falsi (5 iters): {regula_falsi(f1, 2, 3, 5):.6f}")

# Q2: x*log10(x) - 1.2 = 0 (Regula Falsi & Secant, 4 iterations)
f2 = lambda x: x * np.log10(x) - 1.2
# Roots lie between 2 and 3
print(f"2) Regula Falsi (4 iters): {regula_falsi(f2, 2, 3, 4):.6f}")
print(f"2) Secant (4 iters): {secant(f2, 2, 3, 4):.6f}")

# Q3: Evaluate sqrt(12) to 4 decimal places by Newton Raphson
# Equivalent to solving x^2 - 12 = 0
f3 = lambda x: x**2 - 12
df3 = lambda x: 2*x
ans3 = newton_raphson(f3, df3, 3, 5) # 5 iterations usually achieves high precision
print(f"3) Newton Raphson (sqrt(12)): {ans3:.4f}")

# Q4: (x-4)^3 - 3 = 0 (Secant method)
f4 = lambda x: (x - 4)**3 - 3
print(f"4) Secant: {secant(f4, 5, 6, 6):.6f}")

# Q5: cos(x) - 3x + 1 = 0 (Newton Raphson)
f5 = lambda x: np.cos(x) - 3*x + 1
df5 = lambda x: -np.sin(x) - 3
print(f"5) Newton Raphson: {newton_raphson(f5, df5, 0, 5):.6f}")

import numpy as np
from scipy.optimize import curve_fit

# 1) Fit Linear Curve: y = ax + b
def linear_curve(x, a, b):
    return a * x + b

x1 = np.array([2, 5, 6, 7, 8])
y1 = np.array([3, 6.5, 7.2, 8, 13])
params1, _ = curve_fit(linear_curve, x1, y1)
print(f"1) Linear Fit (y = ax + b): a={params1[0]:.4f}, b={params1[1]:.4f}")

# 2) Fit Power Curve: y = a * x^b
def power_curve(x, a, b):
    return a * (x ** b)

x2 = np.array([2, 16, 64])
y2 = np.array([1, 2, 3])
params2, _ = curve_fit(power_curve, x2, y2)
print(f"2) Power Fit (y = ax^b): a={params2[0]:.4f}, b={params2[1]:.4f}")

# 3) Fit Parabolic Curve: y = ax^2 + bx + c
def parabolic_curve(x, a, b, c):
    return a * x**2 + b * x + c

x3 = np.array([0, 1, 2, 3, 4])
y3 = np.array([3, 6.1, 11.5, 18, 27]) 
params3, _ = curve_fit(parabolic_curve, x3, y3)
print(f"3) Parabolic Fit (y = ax^2 + bx + c): a={params3[0]:.4f}, b={params3[1]:.4f}, c={params3[2]:.4f}")

# 4) Fit Exponential Curve: y = a * e^(bx)
def exp_curve(x, a, b):
    return a * np.exp(b * x)

x4 = np.array([1, 2, 3, 4])
y4 = np.array([13.6, 36.95, 100.4, 273.0])
params4, _ = curve_fit(exp_curve, x4, y4)
print(f"4) Exponential Fit (y = ae^(bx)): a={params4[0]:.4f}, b={params4[1]:.4f}")()
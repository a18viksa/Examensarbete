import matplotlib.pyplot as plt
import csv
import streamlit as st
import pandas as pd

st.write("""
# Matplotlib Stock Chart
""")

x = []
y = []

with open('data.csv','r') as csvfile:
    plots = csv.reader(csvfile, delimiter=',')
    for row in plots:
        x.append(int(row[0]))
        y.append(int(row[1]))

plt.plot(x,y, label='Stock price')
plt.xlabel('Datapoints')
plt.ylabel('Stock Price')
plt.title('Stock Chart')
plt.legend()


plt.show()

import plotly_express as px
import pandas as pd
import streamlit as st

st.button('Render')

stock_data = pd.read_csv("data/data.csv")
print(stock_data.head())

stock_line_chart = px.line(x='Datapoints', y='Price', data_frame=stock_data,
                           title='Stock Line Chart', color='Name')
st.plotly_chart(stock_line_chart)


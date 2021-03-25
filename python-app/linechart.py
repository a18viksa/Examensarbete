import plotly.express as px
import pandas as pd
import streamlit as st
import json

# stock_data = pd.read_csv("data/testdata.csv")
# print(stock_data.head())

stock_data = open('data/js.json')
data = json.load(stock_data)
print(data)

st.button('Render')

stock_line_chart = px.line(x='date', y='open', data_frame=data,
                           title='Plotly Line Chart', color='Name')

stock_line_chart.update_xaxes(
    rangeslider_visible=True,
    rangeselector=dict(
        buttons=list([
            dict(count=1, label="1m", step="month", stepmode="backward"),
            dict(count=3, label="3m", step="month", stepmode="backward"),
            dict(count=6, label="6m", step="month", stepmode="backward"),
            dict(count=1, label="YTD", step="year", stepmode="todate"),
            dict(count=1, label="1y", step="year", stepmode="backward"),
            dict(label="All", step="all")
        ])
    )
)
st.plotly_chart(stock_line_chart)

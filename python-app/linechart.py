import plotly.express as px
import streamlit as st
import json

stock_data = open('data/ja.json')
data = json.load(stock_data)

st.sidebar.title('** Dashboard **')
st.sidebar.title('Line Chart')
st.sidebar.title('STOCKS')
st.sidebar.write('Lorem ipsum')
st.sidebar.write('Lorem ipsum')
st.sidebar.write('Lorem ipsum')
st.sidebar.write('Lorem ipsum')
st.sidebar.write('Lorem ipsum')
st.sidebar.write('Lorem ipsum')
st.sidebar.title('FINANCIALS')
st.sidebar.write('Lorem ipsum dolor sit amet')
st.sidebar.write('Lorem ipsum dolor sit amet')
st.sidebar.write('Lorem ipsum dolor sit amet')

stock_line_chart = px.line(x='date', y=['bg'], data_frame=data, width=800, height=500)

stock_line_chart.update_xaxes(
    rangeslider_visible=True,
    rangeselector=dict(
        buttons=list([
            dict(count=1, label="1m", step="month", stepmode="backward"),
            dict(count=3, label="3m", step="month", stepmode="backward"),
            dict(count=6, label="6m", step="month", stepmode="backward"),
            dict(count=1, label="YTD", step="year", stepmode="todate"),
            dict(count=1, label="1y", step="year", stepmode="backward"),
            dict(count=3, label="3y", step="year", stepmode="backward"),
            dict(label="All", step="all")

        ])
    )
)

st.title('Plotly Line Chart')

st.plotly_chart(stock_line_chart)

st.subheader('Dashboard information')

st.markdown('<style>h1{font-size: 50px}</style>', unsafe_allow_html=True)
st.markdown('<style>strong{font-size: 40px}</style>', unsafe_allow_html=True)

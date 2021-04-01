import plotly.express as px
import pandas as pd
import streamlit as st
import json
import numpy as np

# stock_data = pd.read_csv("data/testdata.csv")
# print(stock_data.head())

stock_data = open('data/js.json')
data = json.load(stock_data)

add_selectbox = st.sidebar.text('hthtryhtrer')
add_selectbox = st.sidebar.write('her')




stock_line_chart = px.line(x='date', y=['Facebook','Shopify'], data_frame=data, width=1260, height=700)

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

st.title('Company Profile')

st.plotly_chart(stock_line_chart)


st.subheader('Lorem ipsum')
st.markdown('** Lorem ipsum **: ' + 'Lorem ipsum')
st.markdown('** Lorem ipsum **: ' + 'Lorem ipsum')
st.markdown('** Lorem ipsum **: ' + 'Lorem ipsum')
st.markdown('** Lorem ipsum **:' + 'Lorem ipsum')
st.markdown('** Lorem ipsum **: ' + 'Lorem ipsum')
st.markdown('** Lorem ipsum **')
st.info('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.')
st.markdown('<style>.stPlotlyChart{left: -10px;}</style>', unsafe_allow_html=True)
st.markdown('<style>.css-hx4lkt{left: -250px; position: initial}</style>', unsafe_allow_html=True)

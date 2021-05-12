import plotly.express as px
import streamlit as st
import json

stock_data = open('data/ja.json')
data = json.load(stock_data)

st.sidebar.title('** Dashboard **')
st.sidebar.write('Line Chart')
st.sidebar.write('Stocks')

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

st.subheader('Companies included in chart')
st.markdown('** Company 1 **: ' + 'Bankgang AB')
#st.markdown('** Company 2 **: ' + 'Shopfund AB')
#st.markdown('** Company 3 **: ' + 'Lendary AB')
#st.markdown('** Company 4 **: ' + 'Cashlemon AB')
#st.markdown('** Company 5 **: ' + 'Helpville AB')

st.info('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.')
st.markdown('<style>.stPlotlyChart{left: 0px;}</style>', unsafe_allow_html=True)
st.markdown('<style>.eknhn3m2{left: 0px}</style>', unsafe_allow_html=True)
#st.markdown('<style>p{color: blue}</style>', unsafe_allow_html=True)
#st.markdown('<style>h1{color: blue}</style>', unsafe_allow_html=True)
#st.markdown('<style>.css-1aumxhk{background-image: none; background: #020509}</style>', unsafe_allow_html=True)
#st.markdown('<style>.css-xq1lnh-EmotionIconBase{color: red}</style>', unsafe_allow_html=True)
#st.markdown('<style>.e1tzin5v1{left: -100px}</style>', unsafe_allow_html=True)

const MOCK_ICONS = {
  default: [
    {
      icon: 'New Anchor',
      data: `		<path id="XMLID_4_" fill="#8F8354" stroke="#8F8354" stroke-width="5" d="M269.724,237.561l-12.45-24.922
      c-0.703-1.414-2.148-2.307-3.729-2.307c-1.579,0-3.024,0.893-3.73,2.307l-12.448,24.922c-0.858,1.715,0.39,3.734,2.305,3.734h6.14
      v10.32c0,7.125-5.77,12.903-12.89,12.903h-25.12v-52.268h8.857c4.27,0,7.735-3.468,7.735-7.741l0,0
      c0-4.276-3.466-7.742-7.735-7.742h-8.857v-11.644c9.011-3.189,15.468-11.789,15.468-21.901c0-12.825-10.387-23.223-23.202-23.223
      c-12.813,0-23.201,10.397-23.201,23.223c0,10.112,6.457,18.711,15.467,21.901v11.644h-8.857c-4.271,0-7.733,3.466-7.733,7.742l0,0
      c0,4.273,3.463,7.741,7.733,7.741h8.857v52.268h-25.122c-7.119,0-12.889-5.778-12.889-12.903v-10.32h6.14
      c1.917,0,3.163-2.02,2.306-3.734l-12.449-24.922c-0.707-1.414-2.15-2.307-3.731-2.307c-1.579,0-3.023,0.893-3.73,2.307
      l-12.449,24.922c-0.856,1.715,0.39,3.734,2.306,3.734h6.14v12.902c0,14.25,11.542,25.803,25.779,25.803h27.698h6.746h1.977h6.746
      h27.698c14.237,0,25.778-11.553,25.778-25.803v-12.902h6.141C269.335,241.295,270.582,239.275,269.724,237.561z M200.067,155.482
      c4.271,0,7.734,3.465,7.734,7.74c0,4.276-3.463,7.742-7.734,7.742c-4.271,0-7.734-3.467-7.734-7.742
      S195.797,155.482,200.067,155.482z"/>
    <path id="XMLID_2_" fill="#CDBB79" d="M199.999,170.964V280h-0.988h-6.753h-27.725c-14.25,0-25.802-11.554-25.802-25.803v-12.901
      h-6.147c-1.917,0-3.166-2.019-2.308-3.734l12.46-24.923c0.708-1.413,2.153-2.307,3.735-2.307c1.582,0,3.027,0.894,3.735,2.307
      l12.46,24.923c0.857,1.716-0.39,3.734-2.308,3.734h-6.146v10.319c0,7.127,5.776,12.903,12.901,12.903h25.144v-52.268h-8.864
      c-4.275,0-7.742-3.468-7.742-7.741c0-4.275,3.467-7.742,7.742-7.742h8.864v-11.645c-9.019-3.188-15.481-11.788-15.481-21.899
      c0-12.826,10.397-23.223,23.224-23.223v15.482c-4.276,0-7.742,3.466-7.742,7.741C192.257,167.499,195.724,170.964,199.999,170.964
      z"/>
    <path id="XMLID_3_" fill="#DACD9F" d="M200.002,170.964V280h0.987h6.753h27.725c14.252,0,25.803-11.554,25.803-25.803v-12.901
      h6.147c1.917,0,3.165-2.019,2.308-3.734l-12.461-24.923c-0.708-1.413-2.153-2.307-3.734-2.307c-1.582,0-3.028,0.894-3.735,2.307
      l-12.461,24.923c-0.855,1.716,0.39,3.734,2.31,3.734h6.145v10.319c0,7.127-5.775,12.903-12.901,12.903h-25.144v-52.268h8.865
      c4.274,0,7.741-3.469,7.741-7.741c0-4.275-3.467-7.742-7.741-7.742h-8.865v-11.645c9.019-3.188,15.481-11.788,15.481-21.899
      c0-12.826-10.396-23.223-23.224-23.223v15.482c4.276,0,7.742,3.466,7.742,7.741C207.742,167.499,204.276,170.964,200.002,170.964z
      "/>`
    },
    {
      icon: 'Old Anchor',
      data: `		<g id="XMLID_1407_">
		<path id="XMLID_244_" fill="#00FF00" d="M299.604,253.114l-17.869-36.343c-1.013-2.062-3.087-3.365-5.353-3.365
			c-2.269,0-4.341,1.303-5.356,3.365l-17.867,36.343c-1.231,2.501,0.559,5.445,3.309,5.445h8.813v15.05
			c0,10.391-8.282,18.814-18.5,18.814h-36.056v-76.22h12.712c6.13,0,11.102-5.055,11.102-11.288l0,0
			c0-6.234-4.972-11.289-11.102-11.289h-12.712v-16.98c12.933-4.649,22.2-17.19,22.2-31.934c0-18.703-14.91-33.865-33.301-33.865
			c-18.392,0-33.3,15.162-33.3,33.865c0,14.744,9.267,27.285,22.199,31.934v16.98h-12.712c-6.13,0-11.1,5.055-11.1,11.289l0,0
			c0,6.233,4.97,11.288,11.1,11.288h12.712v76.22h-36.055c-10.218,0-18.5-8.424-18.5-18.814v-15.05h8.813
			c2.751,0,4.539-2.944,3.309-5.445l-17.868-36.343c-1.014-2.062-3.087-3.365-5.355-3.365s-4.34,1.303-5.355,3.365l-17.868,36.343
			c-1.23,2.501,0.559,5.445,3.309,5.445h8.813v18.813c0,20.78,16.565,37.627,37,37.627h39.756h9.682h2.836h9.683h39.756
			c20.435,0,37.001-16.847,37.001-37.627V258.56h8.812C299.045,258.56,300.835,255.615,299.604,253.114z M199.625,133.424
			c6.131,0,11.101,5.054,11.101,11.288c0,6.234-4.97,11.288-11.101,11.288c-6.13,0-11.101-5.055-11.101-11.288
			C188.524,138.478,193.495,133.424,199.625,133.424z"/>
		<path id="XMLID_970_" fill="#FF0000" d="M199.625,156v159h-1.417h-9.683h-39.755c-20.435,0-37-16.847-37-37.627V258.56h-8.814
			c-2.75,0-4.539-2.944-3.309-5.445l17.868-36.343c1.015-2.062,3.087-3.365,5.355-3.365s4.341,1.303,5.355,3.365l17.868,36.343
			c1.23,2.501-0.559,5.445-3.31,5.445h-8.813v15.05c0,10.391,8.283,18.814,18.5,18.814h36.056v-76.22h-12.712
			c-6.13,0-11.101-5.055-11.101-11.288c0-6.234,4.97-11.289,11.101-11.289h12.712v-16.98c-12.933-4.649-22.2-17.19-22.2-31.934
			c0-18.703,14.909-33.865,33.3-33.865v22.577c-6.13,0-11.101,5.054-11.101,11.288C188.524,150.947,193.495,156,199.625,156z"/>
	</g>`
    },
    {
      icon: 'Hot Chocolate',
      data: `	<g id="XMLID_1606_">
    <path id="XMLID_1292_" fill="#FF0000" d="M223.173,144.274L223.173,144.274v51.217h-98.167v-25.608
      c0-14.144,11.466-25.609,25.609-25.609h21.341c14.143,0,25.609-11.465,25.609-25.608l0,0l0,0
      C211.707,118.666,223.173,130.131,223.173,144.274z"/>
    <path id="XMLID_1291_" fill="#00FF00" d="M244.515,161.347L244.515,161.347v51.217h-98.167v-25.608
      c0-14.144,11.465-25.609,25.608-25.609h21.341c14.143,0,25.609-11.466,25.609-25.609l0,0l0,0
      C233.049,135.738,244.515,147.204,244.515,161.347z"/>
    <path id="XMLID_1231_" fill="#FF0000" d="M290.624,209.137L290.624,209.137c-10.173-10.173-25.486-12.066-37.574-5.686v-16.495
      c0-4.715-3.822-8.537-8.535-8.537H120.738c-4.714,0-8.536,3.822-8.536,8.537v102.435c0,14.143,11.465,25.609,25.608,25.609h89.631
      c14.143,0,25.608-11.467,25.608-25.609v-0.867c3.786-1.562,7.335-3.877,10.41-6.955l27.164-27.162
      C303.125,241.904,303.125,221.637,290.624,209.137z M278.551,242.334l-25.501,25.502v-42.252l4.376-4.377
      c5.833-5.832,15.291-5.832,21.125,0l0,0C284.385,227.041,284.385,236.5,278.551,242.334z"/>
    <path id="XMLID_515_" fill="#0000FF" d="M257.317,186.956L257.317,186.956c0,4.714-3.821,8.536-8.535,8.536h-68.291
      c-7.072,0-12.804,5.733-12.804,12.805v66.154c0,10.607-8.599,19.207-19.207,19.207l0,0c-10.608,0-19.206-8.6-19.206-19.207
      v-66.154c0-7.072-5.733-12.805-12.805-12.805l0,0c-4.714,0-8.536-3.821-8.536-8.536l0,0c0-4.715,3.822-8.537,8.536-8.537h132.312
      C253.496,178.419,257.317,182.241,257.317,186.956z"/>
  </g>`
    },
    {
      icon: 'Ships Wheel',
      data: `	<g id="XMLID_1280_">
		<path id="XMLID_1428_" fill="#FF0000" d="M96.886,214.252L96.886,214.252c0,4.923,3.99,8.913,8.913,8.913h13.866
			c1.71,15.471,7.819,29.614,17.05,41.153l-9.807,9.808c-3.481,3.479-3.481,9.123,0,12.604c3.481,3.48,9.125,3.48,12.604,0
			l9.807-9.807c11.54,9.23,25.683,15.34,41.154,17.05v13.865c0,4.923,3.99,8.913,8.912,8.913c4.922,0,8.914-3.99,8.914-8.913
			v-13.865c15.47-1.71,29.613-7.818,41.153-17.05l9.807,9.807c3.48,3.48,9.124,3.48,12.604,0c3.48-3.481,3.48-9.125,0-12.604
			l-9.807-9.808c9.231-11.539,15.34-25.683,17.051-41.153h13.865c4.923,0,8.913-3.99,8.913-8.913l0,0
			c0-4.923-3.99-8.913-8.913-8.913h-13.865c-1.71-15.47-7.819-29.614-17.05-41.153l9.807-9.807c3.479-3.48,3.479-9.124,0-12.605
			c-3.481-3.48-9.125-3.48-12.604,0l-9.808,9.806c-11.539-9.23-25.683-15.339-41.153-17.049v-13.865c0-4.923-3.99-8.913-8.913-8.913
			c-4.923,0-8.913,3.99-8.913,8.913v13.865c-15.471,1.71-29.614,7.819-41.154,17.05l-9.807-9.807c-3.48-3.481-9.124-3.481-12.605,0
			l0,0c-3.48,3.48-3.48,9.125,0,12.604l9.807,9.807c-9.231,11.54-15.34,25.684-17.05,41.154h-13.866
			C100.876,205.339,96.886,209.329,96.886,214.252z M190.473,179.724c-3.271,0.842-6.355,2.143-9.192,3.819l-19.259-19.259
			c8.167-6.116,17.883-10.273,28.452-11.785V179.724L190.473,179.724z M236.75,164.283l-19.259,19.259
			c-2.837-1.676-5.922-2.977-9.192-3.818v-27.226C218.868,154.009,228.584,158.167,236.75,164.283z M261.141,205.339h-27.226
			c-0.842-3.271-2.143-6.355-3.818-9.192l19.259-19.259C255.472,185.054,259.629,194.77,261.141,205.339z M249.355,251.616
			l-19.259-19.259c1.676-2.837,2.977-5.922,3.818-9.192h27.226C259.629,233.734,255.472,243.45,249.355,251.616z M208.299,248.781
			c3.271-0.843,6.355-2.144,9.192-3.819l19.259,19.26c-8.166,6.115-17.883,10.272-28.451,11.784V248.781L208.299,248.781z
			 M181.56,214.252c0-9.845,7.981-17.826,17.826-17.826c9.844,0,17.826,7.981,17.826,17.826s-7.981,17.826-17.826,17.826
			C189.542,232.078,181.56,224.097,181.56,214.252z M162.021,264.222l19.259-19.259c2.837,1.676,5.921,2.977,9.192,3.818v27.227
			C179.904,274.495,170.188,270.338,162.021,264.222z M137.631,223.165h27.226c0.841,3.271,2.143,6.355,3.818,9.192l-19.259,19.259
			C143.3,243.45,139.143,233.734,137.631,223.165z M137.631,205.339c1.512-10.569,5.669-20.285,11.785-28.451l19.259,19.259
			c-1.676,2.837-2.977,5.92-3.818,9.192H137.631L137.631,205.339z"/>
		<path id="XMLID_1452_" fill="#00FF00" d="M199.386,232.078v84.674c4.922,0,8.913-3.99,8.913-8.913v-13.865
			c15.471-1.71,29.614-7.818,41.153-17.05l9.808,9.807c3.479,3.48,9.124,3.48,12.604,0c3.479-3.481,3.479-9.125,0-12.604
			l-9.807-9.808c9.23-11.539,15.34-25.683,17.05-41.153h13.865c4.923,0,8.913-3.99,8.913-8.913l0,0c0-4.923-3.99-8.913-8.913-8.913
			h-13.865c-1.71-15.47-7.819-29.614-17.05-41.153l9.807-9.807c3.479-3.48,3.479-9.124,0-12.605c-3.481-3.48-9.125-3.48-12.604,0
			l-9.808,9.806c-11.539-9.23-25.683-15.339-41.153-17.049v-13.865c0-4.923-3.99-8.913-8.913-8.913v84.674
			c9.844,0,17.826,7.981,17.826,17.826S209.23,232.078,199.386,232.078z M236.75,164.283l-19.259,19.259
			c-2.837-1.676-5.922-2.977-9.192-3.818v-27.226C218.868,154.009,228.584,158.167,236.75,164.283z M261.141,205.339h-27.226
			c-0.842-3.271-2.143-6.355-3.818-9.192l19.259-19.259C255.472,185.054,259.629,194.77,261.141,205.339z M249.355,251.616
			l-19.259-19.259c1.676-2.837,2.977-5.922,3.818-9.192h27.226C259.629,233.734,255.472,243.45,249.355,251.616z M208.299,248.781
			c3.271-0.843,6.355-2.144,9.192-3.819l19.259,19.26c-8.166,6.115-17.883,10.272-28.451,11.784V248.781L208.299,248.781z"/>
		<path id="XMLID_1050_" fill="#00FF00" d="M199.386,205.339c4.922,0,8.913,3.99,8.913,8.913s-3.99,8.913-8.913,8.913
			c-4.923,0-8.913-3.99-8.913-8.913S194.463,205.339,199.386,205.339z"/>
		<path id="XMLID_512_" fill="#FF0000" d="M208.299,214.252c0,4.923-3.99,8.913-8.913,8.913v-17.826
			C204.309,205.339,208.299,209.329,208.299,214.252z"/>
	</g>`
    },
    {
      icon: 'Bicycle',
      data: `<path fill="#FF0000" d="M262.544,187.598c-4.288,0-8.414,0.733-12.24,2.08l-10.157-23.548l9.43-17.195h7.682
	c2.866,0,5.192-2.327,5.192-5.193s-2.326-5.192-5.192-5.192h-26.46c-2.866,0-5.192,2.326-5.192,5.192s2.326,5.193,5.192,5.193h8.249
	l-7.699,14.045h-72.088l3.042-14.04h20.816c2.867,0,5.193-2.326,5.193-5.193s-2.326-5.192-5.193-5.192h-29.191l-10.659,49.235
	c-1.256-0.126-2.524-0.192-3.811-0.192c-20.396,0-36.926,16.528-36.926,36.926s16.531,36.926,36.926,36.926
	c20.395,0,36.926-16.527,36.926-36.926c0-15.476-9.526-28.734-23.037-34.222l3.165-14.617l41.085,55.582
	c0.802,1.082,2.064,1.719,3.405,1.719h25.598c3.828,16.312,18.468,28.464,35.946,28.464c20.395,0,36.926-16.527,36.926-36.926
	S282.938,187.598,262.544,187.598z M166,224.524c0,14.635-11.909,26.541-26.544,26.541s-26.543-11.906-26.543-26.541
	s11.909-26.541,26.543-26.541c0.535,0,1.063,0.012,1.587,0.048l-6.666,30.778c-0.607,2.801,1.178,5.571,3.976,6.172
	c0.369,0.078,0.739,0.115,1.103,0.115c2.395,0,4.541-1.66,5.073-4.094l6.566-30.327C159.915,205.003,166,214.061,166,224.524z
	 M226.705,171.443l-26.75,48.778l-36.064-48.778H226.705z M208.128,224.524l26.862-48.983l7.699,17.85
	c-10.266,6.557-17.072,18.049-17.072,31.133H208.128z M246.882,203.116l9.231,21.408h-20.107
	C236.006,215.743,240.288,207.948,246.882,203.116z M262.544,251.065c-11.675,0-21.61-7.579-25.146-18.079h25.146
	c1.421,0,2.75-0.715,3.533-1.911c0.781-1.184,0.911-2.692,0.349-3.997l-11.999-27.821c2.566-0.823,5.286-1.274,8.117-1.274
	c14.635,0,26.544,11.912,26.544,26.547S277.179,251.065,262.544,251.065z"/>`
    },
    {
      icon: '',
      data: ``
    },
    {
      icon: '',
      data: ``
    },
    {
      icon: '',
      data: ``
    }
  ]
}

module.exports = MOCK_ICONS;
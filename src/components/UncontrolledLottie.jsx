import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/196-material-wave-loading.json'

class UncontrolledLottie extends Component {


    render(){

          const defaultOptions = {
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                          }
                };

          return(
                  <div>
                    <h1>Lottie</h1>
                    <p>Base animation free from external manipulation</p>
                    <Lottie options={defaultOptions}
                          height={200}
                          width={200}
                    />
                  </div>
                )
        }
}

export default UncontrolledLottie

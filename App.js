import React from 'react'
import { Text, View } from 'react-native'
import { Camera, Permissions } from 'expo'

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    faces: []
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  onFacesDetected({faces}) {
    this.setState({ faces })
  }

  render() {
    const { hasCameraPermission, faces } = this.state
    if (hasCameraPermission === null) return <View />
    if (hasCameraPermission === false) return <Text>No access to camera</Text>

    const faceExpression = smilingProbability => {
      const emoji = smilingProbability > 0.5 ? '😊' : '😐'
      return <Text style={{fontSize: 25}}>{emoji}</Text>
    }

    const faceBoundaries = faces.map((face, index) => {
      const {bounds: {origin, size}, smilingProbability} = face
      return (
        <View key={index} style={{
          position: 'absolute',
          top: origin.y,
          left: origin.x,
          width: size.width,
          height: size.height,
          borderWidth: 1,
          borderColor: 'yellow',
          borderStyle: 'solid'
        }}>
          { faceExpression(smilingProbability) }
        </View>
      )
    })

    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.front}
          faceDetectionMode={Camera.Constants.FaceDetection.Mode.fast}
          faceDetectionLandmarks={Camera.Constants.FaceDetection.Landmarks.none}
          faceDetectionClassifications={Camera.Constants.FaceDetection.Classifications.all}
          onFacesDetected={this.onFacesDetected.bind(this)}
        />
        { faceBoundaries }
      </View>
    )
  }
}

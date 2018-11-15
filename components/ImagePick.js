import React from "react";
import { Button, Image, View } from "react-native";
import { ImagePicker } from "expo";

export default class ImagePick extends React.Component {
  state = {
    picture: null
  };

  render() {
    let { picture } = this.state;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Edit Your Profile Image" onPress={this.pickImage} />
        {picture && (
          <Image source={{ uri: picture }} style={{ width: 200, height: 200 }} />
        )}
      </View>
    );
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (!result.cancelled) {
      console.log(this.props.setImage)
      this.setState({ picture: result.uri });

      let base64Img = `data:image/jpg;base64,${result.base64}`;

      //Our cloudinary is dd8ufts96
      let apiUrl = "https://api.cloudinary.com/v1_1/dd8ufts96/image/upload";

      let data = {
        file: base64Img,
        upload_preset: "xphlwosm" //this is the key the API needs to accept unsigned uploads
      };

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json"
        },
        method: "POST"
      })
        .then(async r => {
          let data = await r.json();
          console.log(data.secure_url);
          this.props.setImage(data.secure_url);
          return data.secure_url;
        })
        .catch(err => console.log(err));
    }
  };
}

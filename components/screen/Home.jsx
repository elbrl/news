import { View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Card, Button } from "react-native-paper";
import * as React from "react";

export function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await fetch(`https://dev.to/api/articles?username=ben`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScrollView>
      {data.map((el) => {
        return (
          <View>
            <Card>
              <Card.Title
                title={el.user.name}
                subtitle={el.readable_publish_date}
              />
              <Card.Content>
                <Text variant="titleLarge">{el.title}</Text>
                <Text variant="bodyMedium"> {el.description} </Text>
              </Card.Content>
              <Card.Cover source={{ uri: `${el.cover_image}` }} />
              <Card.Actions>
                <Button
                  onPress={() => {
                    navigation.navigate("Details", { articleSlug: el.slug });
                  }}
                >
                  Details
                </Button>
              </Card.Actions>
            </Card>
          </View>
        );
      })}
    </ScrollView>
  );
}

import { useEffect, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { Card, Button } from "react-native-paper";
import * as React from "react";

export function DetailsScreen({ navigation, route }) {
  const [article, setArticle] = useState([]);
  let fetchData = async () => {
    await fetch(`https://dev.to/api/articles/ben/${route.params.articleSlug}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  };

  // console.log(route.params.articleSlug);
  // console.log(article);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      <Card>
        <Card.Title subtitle={article.readable_publish_date} />
        <Card.Content>
          <Text variant="titleLarge">{article.title}</Text>
          <Text variant="bodyMedium"> {article.description} </Text>
        </Card.Content>
        <Card.Cover source={{ uri: `${article.cover_image}` }} />
        <Card.Actions>
          <Button
            onPress={() => {
              navigation.navigate("Comments", { articleId: article.id });
            }}
          >
            Comments
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

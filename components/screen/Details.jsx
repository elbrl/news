import { useEffect, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { Card, Button } from "react-native-paper";
// import RenderHtml from "react-native-render-html";
import * as React from "react";
import { log } from "react-native-reanimated";

export function DetailsScreen({ navigation, route }) {
  const [article, setArticle] = useState([]);
  let fetchData = async () => {
    await fetch(`https://dev.to/api/articles/ben/${route.params.articleSlug}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  };
  const source = {
    html: `
    ${article.body_html}`,
  };
  console.log(route.params.articleSlug);
  console.log("a");
  useEffect(() => {
    fetchData();
  }, []);
  const { width } = useWindowDimensions();
  return (
    <View>
      <Card>
        <Card.Title
          title={article.user.name}
          subtitle={article.readable_publish_date}
        />
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
// <View>
//   <View style={{ flexDirection: "row" }}>
//     <RenderHtml contentWidth={width} source={source} />

//   </View>
// </View>

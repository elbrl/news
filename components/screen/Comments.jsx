import { View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import * as React from "react";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";

export function CommentScreen({ route }) {
  const [data, setData] = useState([]);
  const { width } = useWindowDimensions();

  const fetchData = async () => {
    await fetch(
      `https://dev.to/api/comments?a_id=${route.params.articleId}?sort=-created_at`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  // console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ margin: 10 }}>
      <ScrollView>
        {data.map((el) => {
          return (
            <View style={{ flexDirection: "row" }}>
              <RenderHtml
                contentWidth={width}
                source={{ html: el.body_html }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

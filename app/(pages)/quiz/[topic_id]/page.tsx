import { QuestionsPageClient } from "./client";

export default function QuestionsPage(props: { params: { topic_id: string } }) {
  return <QuestionsPageClient topic_id={props.params.topic_id} />;
}

import React, { Component } from "react";
import { connect } from "react-redux";

import Services from "../../components/case/Services";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  cards = [
    {
      title: "Разработка ИИ",
      subTitle: "Выбор платформы, создание и обучение модели",
      content: [
        {
          type: "text",
          content:
            "ИИ эффективно применяется в узких областях. Если простыми словами и по аналогии строения дерева, ИИ подразделяется на следующие базовые разделы (ствол): <br/>- Зрение / Данные / Звук / Речь",
        },
        {
          type: "text",
          content:
            "Каждый из этих разделов (ствол) имеет множество разных типов (веток), т.е. в какой именно узкой области необходимо будет работать. И каждый такой тип (ветки) имеет свои функциональные возможности (листья), т.е. что именно необходимо будет делать.",
        },
        {
          type: "text",
          content:
            "Исходя из задачи и ожидаемого результата индивидуально подбираются технологии реализации и проектируется архитектура (строение дерева), после чего, создаются модели машинного обучения и обучаются до необходимого состояния.  ",
        },
        {
          type: "text",
          content:
            "<b>Реализовывали проекты</b> в разделах компьютерного зрения и данных",
        },
      ],
      info: {
        title: "Технологии, с которыми работали",
        content: [
          {
            title: "Фреймворки и Библиотеки для Python:",
            content: "PyTorch, PyTorch Lightning, Fast.ai, TensorFlow, OpenCV",
          },
          {
            title: "Готовые модели и APIs:",
            content:
              "Machine learning from Apple / Google, MTCNN (facenet-pytorch), InceptionResnetV1 (VGGFace2), BERT DeepPavlov, ruGPT-3",
          },
          {
            title: "SaaS решения:",
            content:
              "Plate Recognizer, Amazon SageMaker, Amazon Vision, Yandex DataSphere, Yandex Vision, Azure Computer Vision, Azure Decision, BERT от Google",
          },
        ],
      },
    },
    {
      title: "Экосистема для ИИ",
      subTitle: "Связка из back-end’а и мобильного приложения",
      content: [
        {
          type: "text",
          content:
            "Потенциал ИИ раскрывается в связке со сторонними системами. Для этого, мы создаем эффективную модель клиент-серверного взаимодействия. В которой, оптимально распределяем обработку функций и возможностей, логики и данных. ",
        },
        {
          type: "text",
          content:
            "Серверная часть (back-end) - в основном выступает внутренним ядром экосистемы. В ее разработке мы применяем самый современный стек технологий, который заведомо предполагает работу с ИИ.",
        },
        {
          type: "text",
          content:
            "Мобильное приложение (клиентская часть) - это то, через что будет происходить использование ИИ. Поэтому, в их разработке мы применяем самые качественные «нативные» технологии (high quality), которые также имеют возможность прямого внедрения ИИ",
        },
      ],
      info: {
        title: "Технологии, с которыми работаем",
        content: [
          {
            title: "Дизайн UX/UI:",
            content: "Figma, After Effects",
          },
          {
            title: "iOS:",
            content: "MVVM для iOS с Combine и SwiftUI",
          },
          {
            title: "Android:",
            content: "MVVM для Android с Kotlin и Android Studio",
          },
          {
            title: "Back-end:",
            content: "Python, Django, Docker, Swagger",
          },
          {
            title: "СУБД:",
            content: "PostgreSQL, MongoDB",
          },
          {
            title: "Элементы соц сети:",
            content:
              "Чат (тет-а-тет, групповой), Инвайты, Подписчики, Подписки, Рейтинг, Отзывы, Пожаловаться",
          },
          {
            title: "Контроль качества:",
            content: "Trello, GitLab, Telegram, Google Workspace",
          },
        ],
      },
    },
    {
      title: "Функционал ИИ",
      subTitle: "Искусственный интеллект может многое",
      content: [
        {
          type: "text",
          content:
            "Даже в рамках узкой специализации, ИИ может выполнять ряд сложных профессиональных задач, вплоть до частичной или полной автоматизации.",
        },
        {
          type: "text",
          content:
            "Единственный его недостаток, это то, что одна ML модель решает одну конкретную задачу. НО большое преимущество в том, что можно связывать разные ML модели в одной экосистеме.",
        },
        {
          type: "text",
          content:
            "Поэтому, чтобы добиться эффективного решения с помощью ИИ, всегда пишется ТЗ на функционал, возможности и требуемый результат машинного обучения.",
        },
      ],
      info: {
        title: "Технологии, с которыми работаем",
        content: [
          {
            title: "Зрение:",
            content:
              "Обнаружение объектов, Обнаружение дефектов, Подсчет кол-ва объектов, Обнаружение аномалий, Обнаружение отклонений, Определение закономерностей",
          },
          {
            title: "Данные:",
            content:
              "Прогнозирование события / действия / заболевания, Формирование рекомендаций, Выявление закономерностей, Поиск аномалий",
          },
          {
            title: "Речь:",
            content:
              "Распознование слов из «Аудио / Видео / Файла / Речи», а затем преобразование их в текст",
          },
          {
            title: "Звук:",
            content:
              "Определение источника звука, его характеристики или композиции",
          },
        ],
      },
    },
  ];

  render() {
    return <Services model={{ cards: this.cards }} />;
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(View);
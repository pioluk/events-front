// global describe,it,expect

import * as actions from './search'

describe('search actions', () => {
  it('should create an action to search events', () => {
    const page = 1
    const query = 'lorem'
    expect(actions.searchEvents(page, query)).toMatchSnapshot()
  })

  it('should create an action to reset events search', () => {
    expect(actions.searchEventsReset()).toMatchSnapshot()
  })

  it('should create an action to send found events', () => {
    const totalCount = 3381
    const events = [
      {
        id: 11083,
        title: 'Consequuntur maxime quia officiis.',
        description: 'Consectetur debitis corporis ratione necessitatibus nihil voluptatem temporibus eos corporis. Pariatur nemo mollitia magnam autem harum. Ipsum enim sit voluptates veniam facere. Hic molestiae aliquid repellendus et aliquid qui aut quo. Aut dolores assumenda voluptatum est illo velit maiores et. Aliquam ut illo ut. Corrupti sint ad consequatur quidem dignissimos fuga. Error est dolores dolores nihil. Quibusdam ratione quisquam ipsam in fugiat. Impedit soluta consectetur ut sapiente commodi expedita. Excepturi molestiae id harum est velit itaque sint sequi. Tenetur cum cupiditate soluta repudiandae id. Tempore sequi debitis quidem et. Rerum qui id ut autem sapiente quibusdam repellendus. Velit sapiente magni consequuntur cum. Pariatur aliquid quo quo ducimus quo recusandae ut reprehenderit animi.',
        color: '#36502f',
        image: '8122fbb2-396e-40b7-b5b1-93950ff9bc3d.jpg',
        dateStart: '2016-12-21T08:50:15.783Z',
        dateEnd: '2016-12-21T10:50:15.783Z',
        createdAt: '2016-12-15T14:27:38.554Z',
        updatedAt: '2016-12-15T14:27:38.554Z',
        rank: 0.243171
      }, {
        id: 7883,
        title: 'Minus officiis voluptatem nihil.',
        description: 'Modi assumenda adipisci voluptatem saepe expedita molestiae temporibus fugit veniam. Sapiente qui provident et. Sint ut itaque quidem odit at nesciunt. Enim cum odio nemo minus molestias tempore sunt non. Accusantium recusandae hic quidem harum velit ea. At corporis vitae rerum sunt placeat. Velit aut ea animi dignissimos pariatur officiis dolore. Minima neque ducimus optio id atque ex delectus expedita qui. Earum corporis quo esse minima beatae blanditiis. Exercitationem omnis officia unde mollitia. Atque natus occaecati odit eaque dolor vero recusandae sed. Est doloribus sunt optio quo rerum beatae veritatis earum molestiae. Commodi esse commodi explicabo quaerat provident officia. Qui nam error sit quod beatae itaque maxime quo ut. Exercitationem fuga laboriosam sed necessitatibus sit autem. Voluptate molestiae sed praesentium beatae aut.',
        color: '#254039',
        image: '20161118.jpg',
        dateStart: '2016-12-21T09:42:14.223Z',
        dateEnd: '2016-12-21T11:42:14.223Z',
        createdAt: '2016-12-15T13:45:59.207Z',
        updatedAt: '2016-12-15T13:45:59.207Z',
        rank: 0.243171
      }
    ]
    expect(actions.searchEventsSuccess(totalCount, events)).toMatchSnapshot()
  })
})

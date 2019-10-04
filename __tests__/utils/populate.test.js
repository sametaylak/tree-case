import populate from '../../src/utils/populate'


describe('utils/populate', () => {
  it('should populate array without any parent relations', () => {
    const arr = [
      {
        ID: 1,
        Name: 'Samet',
        City: 'Istanbul',
        Phone: '+90 505 435 24 54'
      },
      {
        ID: 2,
        Name: 'Gorkem',
        City: 'Istanbul',
        Phone: '+90 505 435 24 54'
      }
    ]

    const populatedData = populate(arr)

    const newArr = arr.map(i => ({ ...i, Childs: [] }))
    expect(populatedData).toEqual(newArr)
  })

  it('should populate array with parent relations', () => {
    const arr = [
      {
        ID: 1,
        Name: 'Samet',
        City: 'Istanbul',
        Phone: '+90 505 435 24 54'
      },
      {
        ID: 2,
        parentID: 1,
        Name: 'Gorkem',
        City: 'Istanbul',
        Phone: '+90 505 435 24 54'
      }
    ]

    const populatedData = populate(arr)
    expect(populatedData).toEqual([
      {
        ID: 1,
        Name: 'Samet',
        City: 'Istanbul',
        Phone: '+90 505 435 24 54',
        Childs: [
          {
            ID: 2,
            parentID: 1,
            Name: 'Gorkem',
            City: 'Istanbul',
            Phone: '+90 505 435 24 54',
            Childs: []
          }
        ]
      }
    ])
  })
})

import React, { useEffect, useState } from 'react'

function DynamicForm() {
  const [data, setData] = useState({
    title: '',
    day: '',
    month: '',
    num: '',
    link: '',
    year: '',
    news: '',
    safe_title: '',
    transcript: '',
  })
  useEffect(() => {
    fetch('https://xkcd.com/info.0.json')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('Data', result)
          setData(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log('Error===>', error)
        }
      )
  }, [])
  const handleChange = (e) => {
    setData({
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    alert('Form was submitted: ' + JSON.stringify(data))
    e.preventDefault()
  }
  const goToUrl = (url) => {
    window.open(url, '_blank')
  }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <form onSubmit={handleSubmit}>
              <div className='form-group row '>
                <label className='col-sm-3 offset-sm-1 col-form-label'>
                  Title
                </label>
                <div className='col-sm-7'>
                  <input
                    className='form-control'
                    name='title'
                    value={data.title}
                    onChange={handleChange}
                    type='text'
                  />
                </div>
              </div>
              <div className='form-group row '>
                <label className='col-sm-3 offset-sm-1 col-form-label'>
                  Safe Title
                </label>
                <div className='col-sm-7'>
                  <input
                    className='form-control'
                    name='safe_title'
                    value={data.safe_title}
                    onChange={handleChange}
                    type='text'
                  />
                </div>
              </div>
              <div className='form-group row '>
                <label className='col-sm-3 offset-sm-1 col-form-label'>
                  News
                </label>
                <div className='col-sm-7'>
                  <input
                    className='form-control'
                    name='news'
                    value={data.news}
                    onChange={handleChange}
                    type='text'
                  />
                </div>
              </div>
              <div className='form-group row '>
                <label className='col-sm-3 offset-sm-1 col-form-label'>
                  Transcript
                </label>
                <div className='col-sm-7'>
                  <input
                    className='form-control'
                    name='transcript'
                    value={data.transcript}
                    onChange={handleChange}
                    type='text'
                  />
                </div>
              </div>
              <div className='form-group row '>
                <label className='col-sm-3 offset-sm-1 col-form-label'>
                  Link
                </label>
                <div className='col-sm-7'>
                  <input
                    className='form-control'
                    name='link'
                    value={data.link}
                    onChange={handleChange}
                    type='text'
                  />
                </div>
              </div>
              <div className='form-group row '>
                <label className='col-sm-3 offset-sm-1 col-form-label'>
                  Number
                </label>
                <div className='col-sm-7'>
                  <input
                    className='form-control'
                    name='num'
                    value={data.num}
                    onChange={handleChange}
                    type='text'
                  />
                </div>
              </div>
              <div className='form-group row '>
                <label className='col-sm-3 offset-sm-1 col-form-label'>
                  Day
                </label>
                <div className='col-sm-7'>
                  <input
                    className='form-control'
                    name='day'
                    value={data.day}
                    onChange={handleChange}
                    type='text'
                  />
                </div>
              </div>
              <div className='form-group row '>
                <label className='col-sm-3 offset-sm-1 col-form-label'>
                  Month
                </label>
                <div className='col-sm-7'>
                  <input
                    className='form-control'
                    name='month'
                    value={data.month}
                    onChange={handleChange}
                    type='text'
                  />
                </div>
              </div>
              <div className='form-group row '>
                <label className='col-sm-3 offset-sm-1 col-form-label'>
                  Year
                </label>
                <div className='col-sm-7'>
                  <input
                    className='form-control'
                    name='year'
                    value={data.year}
                    onChange={handleChange}
                    type='text'
                  />
                </div>
              </div>
              <div className='form-group row '>
                <label className='col-sm-3 offset-sm-1 col-form-label'></label>
                <div className='col-sm-7'>
                  <button type='submit' className='btn btn-lg btn-success'>
                    {' '}
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='form-group row '>
          <label className='col-sm-3 offset-sm-1 col-form-label'></label>
          <div className='col-sm-7'>
            <img src={data.img} alt={data.alt} width='100%' />
            <button
              onClick={() => goToUrl(data.img)}
              className='btn btn-lg btn-primary'
            >
              {' '}
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DynamicForm

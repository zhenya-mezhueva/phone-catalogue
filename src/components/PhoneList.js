import React  from 'react';

export const PhoneList = React.memo(
    ({ phones }) => {
  console.log(phones)

  return (
    <div className="col-md-10">
      <ul className="phones">
        {phones.map(phone => (
          <li
            key={phone.id}
            className="thumbnail"
          >
            <a href={`#!/phones/${phone.id}`} className="thumb">
              <img alt="Motorola XOOM™ with Wi-Fi" src={phone.imageUrl} />
            </a>

            <div className="phones__btn-buy-wrapper">
              <a className="btn btn-success" href="#buy">
                Add
              </a>
            </div>

            <a href={`#!/phones/${phone.id}`}>{phone.name}</a>
            <p>
              {phone.snippet}
            </p>
          </li>
        ))}
            </ul>
    </div>
  );
}
)

import React from 'react';
import { Header } from 'semantic-ui-react';
import '../style.css';

class Donate extends React.Component {
  render() {
    const headerStyle = { fontSize: '40px', marginTop: '10px' };
    return (
        <div class='donate'>
          <Header style={headerStyle} textAlign='center' inverted>Donate</Header>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="rafhawaii@gmail.com" />
            <input type="hidden" name="item_name" value="Roosevelt Alumni Association Donation" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
    )
  }
}

export default Donate;

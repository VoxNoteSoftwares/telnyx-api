# Telnyx Node.js API Library

## Disclaimer
This is not the official Telnyx package, but it has been generated using the Telnyx OpenAPI spec to get a typescript first version of their APIs.

## Installation
Install the package with:

```
npm install telnyx-api --save
```

## Usage

The package needs to be configured with your account's API key which is
available in your the [Telnyx Mission Control Portal][api-keys]. Require it with the key's
value:

``` ts
import { Configuration, MessagingProfilesApi } from 'telnyx-api'

const config = new Configuration({
  accessToken: 'KEY123456...',
})

const messagingProfiles = new MessagingProfilesApi(config);
 
const result = messagingProfiles.createMessagingProfile({
  name: 'Summer Campaign',
  whitelisted_destinations: [],
})

console.log(result)
```

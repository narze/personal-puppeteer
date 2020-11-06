import { NowRequest, NowResponse } from '@vercel/node'

export const allowList: { [iat: string]: AllowListItem } = {
  monosor: {
    publicKey: `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAu+ZQABFh5a43qI9fCadM
E+Oy7Lslg2OabN22Df4bqwm2s0re6QrZejnLnDP3KyjqyIz25lZUJffKDhEw4Gf0
9UjpNsMCF9YN/RNPZHAv+j04nuJ/lgCIyArY1+KxZw5Cb30m1LsHp5ETzkItRv/8
AT5FgCVljrEzitnmtkT3M0L4BAJYGuLfRG6Xjx4ZuFX6VAou0Ll5ownHYc2lVZcU
NgCost6hVpbFxJCpeXAGuVYr+D27d7wOllJoGAdw6IB07qhxYFO2Ivd/JbK9dxUA
4mNUZJFVX8dUU40ioWvJ46Tm8EpH8KtQMoNhgNeFcrpIStgRCe2VBduSOLoSOEYp
N2JxxpJT43O9P5xo3VpqFghDeRbeO/s+Z95LgY8zAhw2E7gSDdlPpWbaixVL+kzL
WPmP7hM0FffjTWxIipTTekR+/mBvNhOF86f9SAaEsZGoeM2HxEvlpaGA+4Lr00ff
MN9/2QKpVhAqAbt3+2EEYh6Li/Z2JTk3co5LA4Jmox592eVmzlHcC/SfY1V9Jro4
ZLXL9VXzE4X6uV2wwIwGnSBrQr8d+l1MZAZjLIF7tYcfezwTVv5L4sQi8mzkJdkp
OhfmGinAKFUVf85+BuWYYCrTwqyqUrCXHBhclrZyo/CM5dC4Eia/EVz9rbzS7+OP
rKRqfeONqQyxkCS5IQM4IysCAwEAAQ==
-----END PUBLIC KEY-----`,
  },
}

type AllowListItem = {
  publicKey: string
}

export default async function (req: NowRequest, res: NowResponse) {
  res.json(allowList)
}

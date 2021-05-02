interface MultiFactorInfo {
  displayName?: string | null;
  enrollmentTime: string;
  factorId: string;
  uid: string;
}

interface MultiFactorUser {
  enrolledFactors: MultiFactorInfo[];
}

interface UserMetadata {
  creationTime?: string;
  lastSignInTime?: string;
}

interface UserInfo {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

export interface User {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: UserMetadata;
  multiFactor: MultiFactorUser;
  phoneNumber: string | null;
  photoURL: string | null;
  providerData: UserInfo[];
  providerId: string;
  refreshToken: string;
  tenantId: string | null;
  uid: string;
}

export interface OAuthCredential {
  accessToken?: string;
  idToken?: string;
  providerId: string;
  secret?: string;
  signInMethod: string;
}

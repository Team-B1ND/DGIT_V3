import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ACCESS_TOKEN_KEY } from "../../../constants/token/Token.constant";
import token from "../../../lib/token/token";
import ProfileFallbackLoader from "../FallBackLoader/Profile";
import GitInfo from "../GitInfo";
import { authURL } from "./constant";
import * as S from "./style";
import { palette } from "../../../styles/palette";
import { HeaderProps } from "./types";

const Header = ({ children }: HeaderProps) => {
  return (
    <S.HeaderTextBox>
      <S.HeaderText>
        <span style={{ color: "white" }}>Ranking</span>
        <span style={{ color: "#A8A8A8" }}>for</span>
        <span style={{ fontWeight: "bold", color: palette.main }}>
          {children}
        </span>
      </S.HeaderText>
      {token.getToken(ACCESS_TOKEN_KEY) ? (
        <ErrorBoundary fallback={<>error...</>}>
          <Suspense fallback={<ProfileFallbackLoader />}>
            <GitInfo />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <S.HeaderLoginText onClick={() => (window.location.href = authURL)}>
          도담도담 계정으로 로그인
        </S.HeaderLoginText>
      )}
    </S.HeaderTextBox>
  );
};

export default Header;

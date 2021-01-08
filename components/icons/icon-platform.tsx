/**
 * Copyright 2020 Pattarai
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

type Props = { color: string; height?: number | string };

export default function PlatformLogo({ color, height = 20 }: Props) {
  return (
    <svg height={height} viewBox="0 0 283 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M503.49,479.09H471.34s-21.67-6.29-21.67-25.87V372.14s-57.31,25.17-57.31,92.27,55.92,95.06,55.92,95.06V700.66s-8.39,1.4-14-23.76c-3.84-17.27-28-78.29-47.53-107.65s-68.5-103.44-12.59-187.32c0,0,34.95-62.91,128.62-65.71V286.87s-85.28-4.2-145.39,71.29-28,160.77-28,160.77,12.58,30.75,29.36,53.12,41.94,75.49,48.93,118.83,32.15,41.93,32.15,41.93h64.3"
        fill={color}
      />
    </svg>
  );
}
